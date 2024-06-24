from rest_framework import serializers

from integrations.models import Links


class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Links
        fields = '__all__'