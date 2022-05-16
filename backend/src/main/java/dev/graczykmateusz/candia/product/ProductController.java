package dev.graczykmateusz.candia.product;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products")
class ProductController {

    private final ProductService productService;


}
