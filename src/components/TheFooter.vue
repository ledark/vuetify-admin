<template>
    <div class="container-fluid">
        <v-divider/>
        <v-footer>            
        <p>
            Copyright
            <pre>{{ $store.state.authStore.userData }}</pre>
        </p>
    </v-footer>        
    </div>
</template>