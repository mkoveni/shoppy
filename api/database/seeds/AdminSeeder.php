<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
           'name' => 'Rivalani Simon Hlengani',
           'email' => 'admin@app.com',
           'password' => bcrypt('admin123')
        ]);
    }
}
