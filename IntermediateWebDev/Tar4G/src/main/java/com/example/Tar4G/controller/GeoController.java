package com.example.Tar4G.controller;

import com.example.Tar4G.entity.GeoResource;
import com.example.Tar4G.service.GeoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/resources")
public class GeoController {

    private final GeoService geoService;

    @PostMapping
    public ResponseEntity<GeoResource> createGeoResource(@RequestBody GeoResource geoResource) {
        GeoResource newResource = geoService.createResource(geoResource);
        return new ResponseEntity<>(newResource, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<GeoResource>> getAllGeoResources() {
        List<GeoResource> resources = geoService.getAllResources();
        return ResponseEntity.ok(resources);
    }

    @GetMapping("{id}")
    public ResponseEntity<GeoResource> getGeoResourceById(@PathVariable Long id) {
        GeoResource resource = geoService.getResourceById(id);
        return ResponseEntity.ok(resource);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteGeoResourceById(@PathVariable Long id) {
        geoService.deleteResourceById(id);
        return ResponseEntity.ok("Resource deleted");
    }

    @PutMapping("{id}")
    public ResponseEntity<GeoResource> updateGeoResourceById(@RequestBody GeoResource geoResource, @PathVariable Long id) {
        GeoResource updatedResource = geoService.updateResource(geoResource, id);
        return ResponseEntity.ok(updatedResource);
    }
}
