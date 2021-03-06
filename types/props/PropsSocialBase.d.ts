import { VersionId } from '../service_types/versionid';
import { PropsBase } from './PropsBase';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import bigDecimal = require('js-big-decimal');
import { WorkSocialTerms } from '../service_types/ContractTerms';
import { ParticySocialResult, ParticySocialTarget } from './ParticyResults';
export declare abstract class PropsSocialBase extends PropsBase implements IPropsSocial {
    private static BIG_100;
    constructor(version: VersionId, maxAnnualsBasis: number, factorEmployer: bigDecimal, factorEmployerHigher: bigDecimal, factorEmployee: bigDecimal, factorEmployeeGarant: bigDecimal, factorEmployeeReduce: bigDecimal, marginIncomeEmp: number, marginIncomeAgr: number);
    maxAnnualsBasis: number;
    factorEmployer: bigDecimal;
    factorEmployerHigher: bigDecimal;
    factorEmployee: bigDecimal;
    factorEmployeeGarant: bigDecimal;
    factorEmployeeReduce: bigDecimal;
    marginIncomeEmp: number;
    marginIncomeAgr: number;
    MaxAnnualsBasis(): number;
    FactorEmployer(): bigDecimal;
    FactorEmployerHigher(): bigDecimal;
    FactorEmployee(): bigDecimal;
    FactorEmployeeGarant(): bigDecimal;
    FactorEmployeeReduce(): bigDecimal;
    MarginIncomeEmp(): number;
    MarginIncomeAgr(): number;
    valueEquals(other: IPropsSocial): boolean;
    hasParticy(term: WorkSocialTerms, incomeTerm: number, incomeSpec: number): boolean;
    protected abstract hasTermExemptionParticy(term: WorkSocialTerms): boolean;
    protected abstract hasIncomeBasedEmploymentParticy(term: WorkSocialTerms): boolean;
    protected abstract hasIncomeBasedAgreementsParticy(term: WorkSocialTerms): boolean;
    protected abstract hasIncomeCumulatedParticy(term: WorkSocialTerms): boolean;
    private decInsuranceRoundUp;
    private intInsuranceRoundUp;
    roundedEmployeePaym(basisResult: number): number;
    roundedEmployerPaym(basisResult: number): number;
    resultOvercaps(baseSuma: number, overCaps: number): [number, number];
    annualsBasisCut(incomeList: Iterable<ParticySocialTarget>, annuityBasis: number): [number, number, Iterable<ParticySocialResult>];
}
