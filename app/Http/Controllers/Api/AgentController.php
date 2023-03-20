<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Agent;

class AgentController extends Controller
{
    //
    public function index()
    {
        //
        return response()->json(Agent::get());
    }

    public function show($id)
    {
        //
        return Agent::findOrFail($id);
    }

    public function destroy($id)
    {
        $agent = Agent::findOrFail($id);
        $agent->delete();

        return response()->json([
            'status' => true,
            'message' => "Agent Deleted Successfully!"
        ]);
        
    }
}
