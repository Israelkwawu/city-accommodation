<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listings', function (Blueprint $table) {
            $table->id();
            $table->string('name')->fullText();
            $table->json('gallery')->nullable();
            $table->string('property_type');
            $table->string('sub_property_type');
            $table->string('status');
            $table->char('currency', 3)->default('GHS');
            $table->char('currency_symbol', 5)->default('GH₵');
            $table->decimal('price', 11, 2)->default(0);
            $table->string('address');
            $table->string('country');
            $table->string('state');
            $table->string('city');
            $table->json('attributes');
            $table->text('description');
            $table->softDeletes()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('listings');
    }
};
