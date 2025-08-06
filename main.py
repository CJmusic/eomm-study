import requests

from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("TRN_API_KEY")

headers = {"TRN-Api-Key": API_KEY}

url = "https://public-api.tracker.gg/v2/rivals/standard/profile/{platform}/{playerID}"

resp = requests.get(url.format(platform="pc", playerID="your_id"), headers=headers)

if resp.status_code == 200:
    data = resp.json()
    # parse profile stats or recent matches
else:
    print("Error", resp.status_code, resp.text)
