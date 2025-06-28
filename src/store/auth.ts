import { create } from 'zustand';

function decodeJWT(token: string): any {
  try {
    const payloadBase64 = token.split(".")[1];
    const decodedPayload = atob(payloadBase64);
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error("JWT 디코딩 오류:", error);
    return null;
  }
}


interface AuthState {
  userId: string | null;
  userName: string | null;
  profile: string | null;
  email: string | null;
  setUserId: (userId: string) => void;
  setUserName: (userName: string) => void;
  setProfile: (profile: string) => void;
  setEmail: (email: string) => void;
  initializeFromToken: () => void;
}

const useAuth = create<AuthState>((set) => ({
  userId: null,
  userName: null,
  profile: null,
  email: null,
  setUserId: (userId: string) => set({ userId }),
  setUserName: (userName: string) => set({ userName }),
  setProfile: (profile: string) => set({ profile }),
  setEmail: (email: string) => set({ email }),
  initializeFromToken: () => {
    const token = localStorage.getItem("AT");
    if (token) {
      const payload = decodeJWT(token);
      if (payload) {
        set({
          userId: payload.user_id?.toString() ?? null,
          userName: payload.name ?? null,
          profile: payload.picture ?? null,
          email: payload.email ?? null,
        });
      }
    }
  },
}));

export default useAuth;