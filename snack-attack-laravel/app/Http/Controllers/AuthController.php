<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login (Request $request) {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'Successfully logged in']);
        }
        return response()->json(['message' => 'Unauthorized'], 401);
    }

    public function logout () {
        Auth::logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function register(RegisterRequest $request) {
        $data = $request->validated();
    }
}
