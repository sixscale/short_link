from django.http import JsonResponse

from integrations.facades.clkru_api import clkru_api
from integrations.facades.goo_api import goo_api
from integrations.facades.tiny_url_api import tiny_url_api


def request_handler(request):
    domen = request.data.get("selectedOption")
    match domen:
        case 'clck':
            report_data = clkru_api.get_shortlink(request.data.get("word"))
            return JsonResponse(report_data, safe=False)
        case 'goo':
            report_data = goo_api.get_shortlink(request.data.get("word"))
            return JsonResponse(report_data["short_url"], safe=False)
        case 'tiny':
            report_data = tiny_url_api.get_shortlink(request.data.get("word"))
            return JsonResponse(report_data["data"]["tiny_url"], safe=False)












