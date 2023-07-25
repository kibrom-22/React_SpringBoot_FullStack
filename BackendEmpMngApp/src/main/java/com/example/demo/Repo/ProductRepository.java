package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
