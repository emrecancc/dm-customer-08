import json
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

config_file = os.path.join(BASE_DIR, 'config.json')
with open(config_file, 'r') as f:
    config = json.load(f)