package br.com.sschatz.tasklist;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("br.com.sschatz.tasklist");

        noClasses()
            .that()
                .resideInAnyPackage("br.com.sschatz.tasklist.service..")
            .or()
                .resideInAnyPackage("br.com.sschatz.tasklist.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..br.com.sschatz.tasklist.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
