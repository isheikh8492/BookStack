from rest_framework import viewsets
from .models import Book
from .serializers import BookSerializer
from rest_framework.permissions import IsAuthenticated


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Only return the books that belong to the authenticated user
        return Book.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Automatically assign the book to the logged-in user
        serializer.save(user=self.request.user)
