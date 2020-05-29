package br.com.sschatz.tasklist.domain;


import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Tarefa.
 */
@Entity
@Table(name = "tarefa")
public class Tarefa extends AbstractAuditingEntity  implements Serializable  {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 20)
    @Column(name = "ds_tarefa", length = 20, nullable = false)
    private String dsTarefa;

    @Size(max = 250)
    @Column(name = "ds_observacao", length = 250)
    private String dsObservacao;

    @NotNull
    @Column(name = "bo_concluido", nullable = false)
    private Boolean boConcluido;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDsTarefa() {
        return dsTarefa;
    }

    public Tarefa dsTarefa(String dsTarefa) {
        this.dsTarefa = dsTarefa;
        return this;
    }

    public void setDsTarefa(String dsTarefa) {
        this.dsTarefa = dsTarefa;
    }

    public String getDsObservacao() {
        return dsObservacao;
    }

    public Tarefa dsObservacao(String dsObservacao) {
        this.dsObservacao = dsObservacao;
        return this;
    }

    public void setDsObservacao(String dsObservacao) {
        this.dsObservacao = dsObservacao;
    }

    public Boolean isBoConcluido() {
        return boConcluido;
    }

    public Tarefa boConcluido(Boolean boConcluido) {
        this.boConcluido = boConcluido;
        return this;
    }

    public void setBoConcluido(Boolean boConcluido) {
        this.boConcluido = boConcluido;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Tarefa)) {
            return false;
        }
        return id != null && id.equals(((Tarefa) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Tarefa{" +
            "id=" + getId() +
            ", dsTarefa='" + getDsTarefa() + "'" +
            ", dsObservacao='" + getDsObservacao() + "'" +
            ", boConcluido='" + isBoConcluido() + "'" +
            "}";
    }
}
