from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'


    def handle(self, *args, **kwargs):
        # Clear existing data (delete one by one to avoid Djongo ObjectIdField bug)
        for model in [Leaderboard, Activity, User, Team, Workout]:
            for obj in model.objects.all():
                if getattr(obj, 'id', None):
                    obj.delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        users = [
            User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel),
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc),
            User.objects.create(name='Batman', email='batman@dc.com', team=dc),
        ]

        # Create workouts
        workouts = [
            Workout.objects.create(name='Super Strength', description='Strength training for heroes', suggested_for='Marvel'),
            Workout.objects.create(name='Stealth Moves', description='Stealth and agility drills', suggested_for='DC'),
        ]

        # Create activities
        Activity.objects.create(user=users[0], type='Web Swinging', duration=30, date=timezone.now())
        Activity.objects.create(user=users[1], type='Suit Up', duration=45, date=timezone.now())
        Activity.objects.create(user=users[2], type='Lasso Practice', duration=25, date=timezone.now())
        Activity.objects.create(user=users[3], type='Gadget Training', duration=35, date=timezone.now())

        # Create leaderboard entries
        Leaderboard.objects.create(user=users[0], score=100)
        Leaderboard.objects.create(user=users[1], score=90)
        Leaderboard.objects.create(user=users[2], score=95)
        Leaderboard.objects.create(user=users[3], score=85)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
