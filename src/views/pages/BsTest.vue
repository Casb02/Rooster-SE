<script setup lang="ts">

</script>

<template>
  <div class="container-fluid">
    <h1>Rooster Color pallet</h1>
    <a href="" class="btn btn-brand-1 m-3 ml-0">Knop Kleur 1</a>
    <a href="" class="btn btn-brand-2 m-3">Knop Kleur 2</a>
    <a href="" class="btn btn-brand-3 m-3">Knop Kleur 3</a>
    <a href="" class="btn btn-brand-4 m-3">Knop Kleur 4</a>
    <a href="" class="btn btn-success m-3">Akkoord</a>
    <a href="" class="btn btn-danger m-3">Verwijder</a>
    <div class="alert alert-brand-1">🛈 Dit is een test melding voor kleuren palet | Kleur 1</div>
    <div class="alert alert-brand-2">🛈 Dit is een test melding voor kleuren palet | Kleur 2</div>
    <div class="alert alert-brand-3">🛈 Dit is een test melding voor kleuren palet | Kleur 3</div>
    <div class="alert alert-brand-4">🛈 Dit is een test melding voor kleuren palet | Kleur 4</div>
    <div class="alert alert-success">🛈 Deze is gelukt :) | Success</div>
    <div class="alert alert-danger">🛈 Deze is mislukt :( | Danger</div>
    <div class="bg-brand-1 text-white" style="height: 50px; width: 100%">Background Thema Kleur 1</div>
    <div class="bg-brand-2 text-brand-4" style="height: 50px; width: 100%">Background Thema Kleur 2</div>
    <div class="bg-brand-3 text-brand-4" style="height: 50px; width: 100%">Background Thema Kleur 3</div>
    <div class="bg-brand-4" style="height: 50px; width: 100%">Background Thema Kleur 4</div>

    <h1>Custom componenten</h1>

    <h4>Card</h4>

    <div class="row">

      <div class="col-lg-3 mb-3 mb-lg-0">
        <div class="card">
          <h4 class="card-header">Card + Header + Title</h4>
          <div class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi consequuntur cum dolorem illum numquam, quibusdam rem sint ullam! Culpa eligendi impedit molestiae? Cumque deleniti porro quas qui, quia ut!
          </div>
        </div>
      </div>
      <div class="col-lg-3 mb-3 mb-lg-0">
        <div class="card">
          <h4 class="card-header">Card + Header + Titel + Img</h4>
          <img src="https://picsum.photos/1500/1000" class="card-img-top" alt="Voorbeeld Alt">
          <div class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi consequuntur cum dolorem illum numquam, quibusdam rem sint ullam! Culpa eligendi impedit molestiae? Cumque deleniti porro quas qui, quia ut!
          </div>
        </div>
      </div>
      <div class="col-lg-3 mb-3 mb-lg-0">
        <div class="card">
          <img src="https://picsum.photos/1500/1000" class="card-img-top" alt="Voorbeeld Alt">
          <div class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi consequuntur cum dolorem illum numquam, quibusdam rem sint ullam! Culpa eligendi impedit molestiae? Cumque deleniti porro quas qui, quia ut!
          </div>
        </div>
      </div>
      <div class="col-lg-3 mb-3 mb-lg-0">
        <div class="card">
          <h4 class="card-header">Voorbeeld inlog</h4>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Wachtwoord</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Onthoud mij</label>
              </div>
              <button type="submit" class="btn btn-primary">Inloggen</button>
            </form>
          </div>
        </div>
      </div>

    </div>




  </div>
</template>

<style scoped>

</style>