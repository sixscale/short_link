from rest_framework.generics import CreateAPIView

from integrations.api.serializers import LinksSerializer
from integrations.services.request_handler import request_handler


class CreateShortLinkAPI(CreateAPIView):
    serializer_class = LinksSerializer

    def post(self, request, *args, **kwargs):
        return request_handler(request)

