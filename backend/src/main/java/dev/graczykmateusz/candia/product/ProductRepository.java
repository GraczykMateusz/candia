package dev.graczykmateusz.candia.product;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p" +
            " WHERE p.name = :name" +
            " AND p.category = :category" +
            " AND (p.price BETWEEN :fromPrice AND :toPrice)")
    Optional<List<Product>> findAllBySearchCommand(String name, String category, BigDecimal fromPrice,
                                                   BigDecimal toPrice);
}
