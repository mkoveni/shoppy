<?php

namespace App\Listeners\Client;

use App\Models\Product;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Events\Client\TransactionMade;
use App\Models\TransactionType;
use const App\TRANSACTION_PURCHASE;
use const App\TRANSACTION_TOPUP;
use App\Repository\Interfaces\ClientRepository;

class UpdateClientCredit
{
    /**
     * client repository instance
     *
     * @var [type]
     */
    protected $clientRepository;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(ClientRepository $repository)
    {
        $this->clientRepository = $repository;
    }

    /**
     * Handle the event.
     *
     * @param  ProductPurchased  $event
     * @return void
     */
    public function handle(TransactionMade $event)
    {
        $transaction = $event->transaction;

        $transactionType  = TransactionType::find($event->transaction->transaction_type_id);

        $client_id = $transaction->client_id;

        if(!$transactionType) {
            
            $event->transaction->delete();

            return;
        }
    
        switch($transactionType->type) {

            case TRANSACTION_PURCHASE: 
                $this->clientRepository->deductFunds($client_id, $transaction->amount);
                break;
            case TRANSACTION_TOPUP:
                $this->clientRepository->addFunds($client_id, $transaction->amount);
                break;
        }
    }


}