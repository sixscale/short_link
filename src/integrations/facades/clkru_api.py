import requests


class ClkruApi:
    ENDPOINT = 'https://clck.ru/--'

    def get_shortlink(self, full_link):
        params = {
            'url': full_link
        }
        response = requests.get(self.ENDPOINT, params=params)
        return response.text


clkru_api = ClkruApi()
