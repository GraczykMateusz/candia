package dev.graczykmateusz.candia.product;

import dev.graczykmateusz.candia.product.exception.ProductNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Nie znaleziono produktu o id: " + id));
    }

    public List<Product> getProductsBySearchCommand(ProductSearchCommand command) {
        return productRepository
                .findAllBySearchCommand(
                        command.getName(), command.getCategory(),
                        command.getFromPrice(), command.getToPrice())
                .orElseThrow(() -> new ProductNotFoundException(
                        String.format("Nie znaleziono żadnego produktu o podantch właściwościach: %s %s %s %s",
                                command.getName(), command.getCategory(),
                                command.getFromPrice(), command.getToPrice())));
    }
}
