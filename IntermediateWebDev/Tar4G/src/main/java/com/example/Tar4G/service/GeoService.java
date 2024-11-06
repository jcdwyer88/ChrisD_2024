package com.example.Tar4G.service;

import com.example.Tar4G.entity.GeoResource;
import com.example.Tar4G.repository.GeoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class GeoService {

    private final GeoRepository geoRepository;

    public GeoResource createResource(GeoResource geoResource) {
        return geoRepository.save(geoResource);
    }

    public List<GeoResource> getAllResources() {
        return geoRepository.findAll();
    }

    public GeoResource getResourceById(Long id) {
        return geoRepository.findById(id).orElse(null);
    }

    public void deleteResourceById(Long id) {
        geoRepository.deleteById(id);
    }

    public GeoResource updateResource(GeoResource updatedResource, Long id) {
        GeoResource geoResource = geoRepository.findById(id).orElse(null);
        geoResource.setName(updatedResource.getName());
        geoResource.setDescription(updatedResource.getDescription());
        geoResource.setUrl(updatedResource.getUrl());
        geoResource.setKeywords(updatedResource.getKeywords());
        return geoRepository.save(geoResource);
    }

}
