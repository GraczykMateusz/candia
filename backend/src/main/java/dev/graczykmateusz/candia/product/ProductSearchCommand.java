package dev.graczykmateusz.candia.product;

import lombok.Data;

import java.math.BigDecimal;

@Data
class ProductSearchCommand {
    private String name;
    private String category;
    private BigDecimal fromPrice;
    private BigDecimal toPrice;
}
