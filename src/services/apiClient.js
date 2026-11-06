const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
export async function apiRequest(path, options={}) {
 const response=await fetch(`${BASE_URL}${path}`,{headers:{'Content-Type':'application/json',...(options.headers||{})},...options});
 const body=response.status===204?null:await response.json().catch(()=>null);
 if(!response.ok)throw new Error(body?.message||`Request failed (${response.status})`);
 return body;
}
