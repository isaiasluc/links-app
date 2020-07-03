export const getTokenExpire = (token) => {
    if (!token) return 0;
    try {
    //Separando o tokenParts em 3 variáveis (Header, Payload e Signature)
    const [, payload] = token.split('.');
    
    const data = JSON.parse(atob(payload));
    const expires = data ? data.exp : 0;
    return expires;
    } catch (e) {
        return 0;
    }
}