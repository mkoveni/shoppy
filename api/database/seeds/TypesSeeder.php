<?php

use App\Models\TransactionType;
use Illuminate\Database\Seeder;
use const App\TRANSACTION_TOPUP;
use const App\TRANSACTION_PURCHASE;

class TypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TransactionType::create(['type' => TRANSACTION_PURCHASE]);

        TransactionType::create(['type' => TRANSACTION_TOPUP]);
    }
}
