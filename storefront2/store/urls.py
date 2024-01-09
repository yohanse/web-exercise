from . import views
from rest_framework_nested import routers

router = routers.DefaultRouter()
router.register("products", views.ProductViewSet, basename='products')
router.register("collections", views.CollectionViewSet)
router.register("carts", views.CartViewSet, basename='carts')
router.register("customer", views.CustomerViewSet, basename='customer')

products_router = routers.NestedDefaultRouter(router, "products", lookup='product')
products_router.register('reviews', views.ReviewViewSet, basename='product-reviews')

cart_router = routers.NestedDefaultRouter(router, "carts", lookup='cart')
cart_router.register('items', views.CartItemViewSet, basename='cart-items')

urlpatterns = router.urls + products_router.urls + cart_router.urls