<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login (LoginRequest $request) {
        $data = $request->validated();

        if (!Auth::attempt($data)) {
            return response([
                'errors' => [
                    'email' => ['The provided credentials are incorrect.']
                ]
            ], 422);
        }

        $user = Auth::user();

        return [
            'token' => $user->createToken('auth_token')->plainTextToken,
            'user' => $user
        ];
    }

    public function logout (Request $request) {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return [
            'user' => null
        ];
    }

    public function register(RegisterRequest $request) {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        return [
            'token' => $user->createToken('auth_token')->plainTextToken,
            'user' => $user
        ];
    }
}
