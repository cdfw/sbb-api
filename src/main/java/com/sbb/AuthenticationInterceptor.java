package com.sbb;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.sbb.entity.UserEntity;
import com.sbb.repository.UserRepository;

public class AuthenticationInterceptor implements HandlerInterceptor {

    private UserRepository repository ;

	public AuthenticationInterceptor(UserRepository repository) {
		this.repository = repository;
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// TODO Auto-generated method stub
		System.out.println("\n-------- AuthenticationInterceptor.preHandle --- ");
		String header = request.getHeader("Authorization");
		
		if(request.getRequestURI().contains("authenticateUser")) {
			return true;
		}

        if (header == null || !header.startsWith("Bearer ")) {
        	response.getWriter().write("{'Error Message' : 'Invalid User'}");
            return false;
        } else {
        	UserEntity user = repository.findByToken(header.replace("Bearer ", ""));
            if (null == user) {
            	response.getWriter().write("{'Error Message' : 'Invalid User'}");
                return false;
            }
        }
        
        
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		// TODO Auto-generated method stub
		HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
	}

}
