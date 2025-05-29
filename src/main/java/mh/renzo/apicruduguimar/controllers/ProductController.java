package mh.renzo.apicruduguimar.controllers;

import mh.renzo.apicruduguimar.entities.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {

    private List<Product> products = new ArrayList<Product>();

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts(){
        return ResponseEntity.ok(products);
    }

    @GetMapping("/products/{product}")
    public ResponseEntity<Product> getProduct(@PathVariable String producto){
        return products.stream()
                .filter(product -> product.getProductName().equals(producto))
                .findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/products")
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        products.add(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }

    @PutMapping("/products/{productName]")
    public ResponseEntity<Product> updateProduct(@PathVariable String productName, @RequestBody Product product){
       return null;
    }

    @DeleteMapping("/products/{product}")
    public ResponseEntity<Product> deleteProduct(@PathVariable String product){
        return null;
    }

}
