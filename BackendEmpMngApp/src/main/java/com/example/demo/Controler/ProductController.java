package com.example.demo.Controler;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Entity.Product;
import com.example.demo.Service.ProductService;

@RestController @CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@GetMapping("/products")
	public List<Product> getAllProducts()
	{
		return productService.getAllProduct();
	}
	
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable(value="id")Long productId)
	throws Exception
	{
		return productService.getProductById(productId);
	}
	
	@PostMapping("/products")
	public Product createProduct(@Validated @RequestBody Product product)
	{
		return productService.createProduct(product);
	}
	
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable(value="id")Long productId,
			@Validated @RequestBody Product productDetails) throws Exception
	{
		return productService.updateProduct(productId, productDetails);
	}
	
	@DeleteMapping("/products/{id}")
	public Map<String,Boolean> deleteProduct(@PathVariable(value="id") Long productId)
	throws Exception
	{
		return productService.deleteProduct(productId);
	}
}

