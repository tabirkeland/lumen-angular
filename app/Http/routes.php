<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return view('index');
});

$app->group(['prefix' => 'api'], function () use ($app) {
	$app->get('users', function () {
		return response()->json([
			[
				'name'		=>	'User 1',
				'address'	=>	'1 Street',
				'member'	=>	false
			],
			[
				'name'		=>	'User 2',
				'address'	=>	'2 Street',
				'member'	=>	true
			],
			[
				'name'		=>	'User 3',
				'address'	=>	'3 Street',
				'member'	=>	false
			]
		]);
	});
});