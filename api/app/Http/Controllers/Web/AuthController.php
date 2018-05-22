<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function login()
    {
        return view('auth.login');
    }

    public function authenticate(Request $request)
    {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required'
        ]);

        $attempt = auth()->attempt($request->only(['email','password']));

        if($attempt) {

            return redirect()->route('admin.dashboard');
        }

        session()->flash('error', 'Oops! could not sign you in with those credentials');

        return redirect()->back();
    }

    public function logout()
    {
        auth()->logout();

        return redirect()->route('login');
    }
}
