<template>
  <main class="auth">
    <div class="auth__wrapper">
      <div class="auth__hero">
        <img src="@/assets/icon-secondary.png" />
        <h1>Eduverse</h1>
        <p>وبسایت آموزشی استاد سیفی پور</p>
      </div>
      <section class="auth__main">
        <Nuxt />
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'authLayout',
}
</script>

<style lang="scss" scoped>
.auth {
  background-image: url('@/assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  &__wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 4em;
    min-height: 100vh;
    width: 70%;
    margin: 0 auto;
  }

  &__hero {
    color: white;
    display: flex;
    flex-direction: column;

    img {
      width: 6em;
    }

    h1 {
      margin-top: 1em;
      font-size: 3em;
    }

    p {
      font-size: 1.5em;
    }
  }

  &__main {
    width: 40%;
    height: fit-content;
    background: linear-gradient(
      205.3deg,
      #ffffff -0.03%,
      rgba(255, 255, 255, 0.85) 99.97%
    );
    border: 5px solid #ffffff;
    backdrop-filter: blur(7.5px);
    border-radius: 1.5em;

    padding: 2em;
  }
}

@media (max-width: 800px) {
  .auth {
    &__wrapper {
      // width: 100%;
      flex-direction: column;
    }
    &__main {
      width: 100%;
    }
  }
}
</style>
