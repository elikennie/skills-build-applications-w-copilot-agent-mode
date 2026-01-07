from rest_framework import serializers
from .models import User, Team, Activity, Workout, Leaderboard
from django.db import connection


def get_mongodb_id(obj):
    """Get the MongoDB _id for a djongo model instance"""
    model_name = obj.__class__.__name__.lower()
    collection_name = obj._meta.db_table
    
    # Use the model's email or name to find the document in MongoDB
    with connection.cursor() as cursor:
        if hasattr(obj, 'email'):
            cursor.execute(f"SELECT id FROM {collection_name} WHERE email = %s", [obj.email])
        elif hasattr(obj, 'name'):
            cursor.execute(f"SELECT id FROM {collection_name} WHERE name = %s", [obj.name])
        else:
            return None
        
        result = cursor.fetchone()
        return str(result[0]) if result and result[0] else None


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name')
    
    def to_representation(self, instance):
        from pymongo import MongoClient
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']
        doc = db.teams.find_one({'name': instance.name})
        data = super().to_representation(instance)
        data['id'] = str(doc['_id']) if doc else None
        return data


class UserSerializer(serializers.ModelSerializer):
    team = TeamSerializer(read_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'team']
    
    def to_representation(self, instance):
        from pymongo import MongoClient
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']
        doc = db.users.find_one({'email': instance.email})
        data = super().to_representation(instance)
        data['id'] = str(doc['_id']) if doc else None
        return data


class ActivitySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Activity
        fields = ['id', 'user', 'type', 'duration', 'date']
    
    def to_representation(self, instance):
        from pymongo import MongoClient
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']
        doc = db.activities.find_one({'user_id': instance.user_id})
        data = super().to_representation(instance)
        data['id'] = str(doc['_id']) if doc else None
        return data


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ['id', 'name', 'description', 'suggested_for']
    
    def to_representation(self, instance):
        from pymongo import MongoClient
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']
        doc = db.workouts.find_one({'name': instance.name})
        data = super().to_representation(instance)
        data['id'] = str(doc['_id']) if doc else None
        return data


class LeaderboardSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Leaderboard
        fields = ['id', 'user', 'score']
    
    def to_representation(self, instance):
        from pymongo import MongoClient
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']
        doc = db.leaderboard.find_one({'user_id': instance.user_id})
        data = super().to_representation(instance)
        data['id'] = str(doc['_id']) if doc else None
        return data
