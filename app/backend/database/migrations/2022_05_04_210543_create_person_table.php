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
        Schema::create('person', function (Blueprint $table) {
            $table->id();
            $table->string('nombres', 250)->nullable();
            $table->string('apellidos', 250)->nullale();
            $table->string('tipoID', 250)->nullable();
            $table->string('numeroID', 250)->nullable();
            $table->date('fechaNaci')->nullable();
            $table->string('contrasena', 250)->nullable();
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
        Schema::dropIfExists('person');
    }
};
