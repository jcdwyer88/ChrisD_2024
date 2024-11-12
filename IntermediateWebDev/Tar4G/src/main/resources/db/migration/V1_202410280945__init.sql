CREATE TABLE geo_resource
(
    id          BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
    name        VARCHAR(255),
    description VARCHAR(255),
    url         VARCHAR(255),
    CONSTRAINT pk_geo_resource PRIMARY KEY (id)
);