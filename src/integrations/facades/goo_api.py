import json

import requests
from django.conf import settings


class GooApi:
    BASE_URL = 'https://goo.su/api'

    def get_shortlink(self, full_link):
        headers = {
            'content-type': 'application/json',
            'x-goo-api-token': settings.GOO_API_TOKEN,
        }
        data = {
            'url': full_link,
            'is_public': True,
        }
        response = requests.post(self.BASE_URL + '/links/create', data=json.dumps(data), headers=headers)
        print(response.text)
        print(response)
        return response.json()


goo_api = GooApi()
