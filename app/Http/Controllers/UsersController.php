<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class UsersController extends Controller
{
    public function index() {
        return view('login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Email atau password salah.'
            ], 401);
        }

        Auth::login($user);

        $redirectUrl = $user->role === 'admin'
            ? '/dashboard'
            : '/activities/berita';

        return response()->json([
            'success' => true,
            'redirect' => $redirectUrl
        ]);
    }
}
