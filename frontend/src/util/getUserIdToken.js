
export default function getUserIdToken() {
    const userId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('token');
    return { userId, token };
} 