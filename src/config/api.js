"use client"

export const API_BASE_URL = "http://localhost:2323/api";

if (typeof TextEncoder === 'undefined') {
    global.TextEncoder = TextEncoder;
}

if (typeof TextDecoder === 'undefined') {
    global.TextDecoder = TextDecoder;
}

