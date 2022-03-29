package dev.graczykmateusz.candia.product;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products")
class ProductController {

    private final ProductService productService;

//    @PostMapping
//    void addProduct(@RequestParam) {
//
//    }

    @GetMapping
    List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/{id}")
    Product getProductById(@RequestParam Long id) {
        return productService.getProductById(id);
    }

    @GetMapping("/search")
    List<Product> getProductsBySearchCommand(@RequestBody ProductSearchCommand command) {
        return productService.getProductsBySearchCommand(command);
    }
}
