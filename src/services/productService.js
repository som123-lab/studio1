import {products,categories} from '../data';
import {apiRequest} from './apiClient';
const USE_MOCKS=true; // Switch after the Spring Boot API contract is agreed.
export async function getProducts(){return USE_MOCKS?products:apiRequest('/api/products');}
export async function searchProducts(query){const all=await getProducts();return all.filter(p=>(p.name+' '+p.category+' '+p.description).toLowerCase().includes(query.toLowerCase()));}
export async function getProduct(id){return USE_MOCKS?products.find(p=>p.id===id):apiRequest(`/api/products/${id}`);}
export async function getCategories(){return USE_MOCKS?categories:apiRequest('/api/categories');}
export async function submitOrder(order){if(USE_MOCKS){await new Promise(r=>setTimeout(r,350));return {demo:true,order};}return apiRequest('/api/orders',{method:'POST',body:JSON.stringify(order)});}
