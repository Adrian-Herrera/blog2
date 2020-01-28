<template>
  <div class="adm-publication">
    <div class="table-title">
      <h3>Lista de publicaciones</h3>
      <router-link to="/dashboard/NuevoPost">
        <button class="button new">Nuevo</button>
      </router-link>
    </div>
    <div class="table-body">
      <table>
        <tr>
          <th>Nombre</th>
          <th>Fecha</th>
          <th class="table-buttons">Acciones</th>
        </tr>
        <tr>
          <td>Titulo 1</td>
          <td>Hace 2 semanas</td>
          <td nowrap>
            <button class="button edit">Editar</button
            ><button class="button erase">Borrar</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
