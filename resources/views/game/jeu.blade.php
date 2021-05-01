@extends('layouts.template')
@section('title', __("le jeu en ligne"))

@section('content')
<section id="game-page" class="landscape">
    <header id="Header" class="Header">
        <div class="HeaderLogo">
            <!-- Nécessaire pour le bon fonctionnement du Loading -->
            <img src="./resources/game/Logo.png" alt="logo" style="display: none;"/>
        </div>
        <div class="Mute">
        </div>
    </header>
    {{-- <div id="turn"> Please rotate your device!</div> --}}
    <div id="Main" role="main">
        <span id="settings" class="hoverable"><i class="fas fa-cog"></i></span>
        <div id="Cinematic" class="Cinematic">
            <!-- Cinematic -->
        </div>
        <div id="Game" class="Game">
            <div id="ObjectInfo">
                <div class="modal glass-effect">
                    <div class="modal-content glass-effect" >
                        <p class="close-button hoverable">&times;</p>
                        <div id="Activity">
                        <!-- Activités de chaque jeu -->
                        </div>
                    </div>
                    <div class="glass-effect" id="Inventory">
                    <!-- Inventaire -->
                    </div>
                </div>
            </div>

            <!--Jeu -->
            <div id="Area">
                <!-- Aire de jeu -->
                <div id="Objects"></div>
                <div id="Decors"></div>
            </div>
        </div>
        <div id="Interface" class="Interface">
            <!-- Timer -->
        </div>
    </div>
</section>

@endsection
