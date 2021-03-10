from rest_framework import permissions
from constants import SELLER_FIELD, BUYER_FIELD

class IsBuyerOrReadOnly(permissions.BasePermission):
    """
    Global permission to only allow buyers to make changes.
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user.user_type == BUYER_FIELD

class IsSellerOrReadOnly(permissions.BasePermission):
    """
    Global permission to only allow sellers to make changes.
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user.user_type == SELLER_FIELD