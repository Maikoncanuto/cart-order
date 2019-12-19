package com.tech.mapper;

import java.util.ArrayList;
import java.util.List;

import com.github.dozermapper.core.DozerBeanMapperBuilder;
import com.github.dozermapper.core.Mapper;

public class MapperObject {

    private static Mapper mapper = DozerBeanMapperBuilder.buildDefault();


    public static <S, D> D parse(S src, Class<D> des) {
		return mapper.map(src, des);
	}
	
	public static <S, D> List<D> parse(List<S> src, Class<D> des) {
		List<D> objects = new ArrayList<>();
		for (Object o : src) {
			objects.add(mapper.map(o, des));
		}
		return objects;
	}
    

}