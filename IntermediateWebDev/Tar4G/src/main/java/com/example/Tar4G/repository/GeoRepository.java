package com.example.Tar4G.repository;

import com.example.Tar4G.entity.GeoResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.web.bind.annotation.RequestParam;

public interface GeoRepository extends JpaRepository<GeoResource,Long> {
//    Page<GeoResource> findByDescriptionContainingOrNameContaining(@RequestParam("description") String description, @RequestParam("name") String name, Pageable pageable);
    Page<GeoResource> findByNameContainingOrDescriptionContaining(String name, String description, Pageable pageable);
}
