package com.example.demo.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;


import com.example.demo.Entity.Product;
import com.example.demo.Repo.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	public List<Product> getAllProduct()
	{
		return productRepository.findAll();
	}
	
	public ResponseEntity<Product> getProductById(@PathVariable(value ="id")Long productId)
	throws Exception
	{
		Product product = productRepository.findById(productId)
				.orElseThrow(()->new Exception("Product not found for this id:"+productId));
		return ResponseEntity.ok().body(product);
	}
	
	public Product createProduct(@Validated @RequestBody Product product)
	{
		return productRepository.save(product);
	}
	
	public ResponseEntity<Product> updateProduct(@PathVariable(value="id")Long productId,
			@Validated @RequestBody Product productDetails) throws Exception
	{
		Product product = productRepository.findById(productId)
				.orElseThrow(()-> new Exception("Employee not found for this id :"+productId));
		
		product.setName(productDetails.getName());
		product.setQuantity(productDetails.getQuantity());
		product.setPrice(productDetails.getPrice());
	
		
		final Product updateProduct = productRepository.save(product);
		return ResponseEntity.ok(updateProduct);
	}
	
	public Map<String,Boolean> deleteProduct(@PathVariable(value="id")Long productId) throws Exception
	{
		Product product = productRepository.findById(productId)
				.orElseThrow(()->new Exception("Product Not found for this id:"+productId));
		
		productRepository.delete(product);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
		
	}

}
