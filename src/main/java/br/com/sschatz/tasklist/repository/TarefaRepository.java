package br.com.sschatz.tasklist.repository;

import br.com.sschatz.tasklist.domain.Tarefa;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Tarefa entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}
