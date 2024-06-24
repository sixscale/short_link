import json

import requests
from django.conf import settings


class TinyUrlApi:
    BASE_URL = 'https://api.tinyurl.com'

    def get_shortlink(self, full_link):
        headers = {
            'Authorization': f'Bearer {settings.TINY_URL_API_TOKEN}',
            'content-type': 'application/json',
        }
        data = {
            "url": full_link,
            "domain": "tinyurl.com",
            # "alias": "myexamplelink",
            "description": "string"
        }
        response = requests.post(self.BASE_URL + '/create', data=json.dumps(data), headers=headers)
        print(response.text)
        print(response)
        return response.json()


tiny_url_api = TinyUrlApi()
